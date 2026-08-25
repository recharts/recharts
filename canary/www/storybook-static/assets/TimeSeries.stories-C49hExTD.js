import{R as e}from"./iframe-D6azDvqV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cf0m1xXe.js";import{R as h}from"./zIndexSlice-CJI37Eji.js";import{C as g}from"./ComposedChart-CmwmgTBj.js";import{L as x}from"./Line-DXVG3ibe.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BukzO1yu.js";import{T as V}from"./Tooltip-DlLeUOLM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CnIKHaJW.js";import"./Layer-Dd-QkUnw.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./Label-Bq-FSxS9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMP0BbGV.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./types-ArXcJt3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./throttle-9sEg-owe.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./axisSelectors-Cuma3wLU.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./Curve-BtvAXlb-.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CFHSF17T.js";import"./useAnimationId-B0HxjIs3.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-rfYS5NLv.js";import"./uniqBy-Bxq63F-T.js";import"./iteratee-CnoSjSAp.js";import"./Cross-CIiy--iG.js";import"./Rectangle-D0LhkaJ7.js";import"./util-Dxo8gN5i.js";import"./Sector-Ck0QgXZH.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
