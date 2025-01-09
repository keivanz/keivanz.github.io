module Jekyll
    class RandomQuoteTag < Liquid::Tag
      def initialize(tag_name, text, tokens)
        super
        @quotes = Jekyll.configuration({})["quotes"]
      end
  
      def render(context)
        random_quote = @quotes.sample
        random_quote
      end
    end
  end
  
  Liquid::Template.register_tag('random_quote', Jekyll::RandomQuoteTag)
  