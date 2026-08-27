import{R as e}from"./iframe-JTvlYrAE.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D-RPwoLI.js";import{R as h}from"./zIndexSlice-D7ZMgfig.js";import{C as g}from"./ComposedChart-dEDwCA-a.js";import{L as x}from"./Line-BHsO2LXO.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CyiZcwJt.js";import{T as V}from"./Tooltip-DdQhOIKa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BCWZ119m.js";import"./Layer-OemeYySJ.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./Label-DVdjMuKO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./types-BAT4N-Js.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./throttle-CXxUHuO5.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./index-C2cjqz89.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Curve-D4vRDLjT.js";import"./step-8zevn7on.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtaNoYLp.js";import"./useAnimationId-B-nvf5O7.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./ErrorBarContext-C1DfV54u.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DZ6FTXmj.js";import"./uniqBy-CY-58Mlk.js";import"./iteratee-ByQfU6mD.js";import"./Cross-CJpIXaUR.js";import"./Rectangle-C-NwM-8_.js";import"./util-Dxo8gN5i.js";import"./Sector-ZvcJKD-T.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
