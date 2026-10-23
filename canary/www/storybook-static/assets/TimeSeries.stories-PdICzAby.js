import{R as e}from"./iframe-D54unYLy.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-R4jdjMJ5.js";import{R as h}from"./zIndexSlice-Cm3b7ejj.js";import{C as g}from"./ComposedChart-D7cf1DfT.js";import{L as x}from"./Line-ByVQ_w7d.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-izKDfaZA.js";import{T as V}from"./Tooltip-5_e256fX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-UtS4SURK.js";import"./Layer-crHiZgAm.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./Label-A3PRHVZO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfUYfUZg.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./types-BmPqNA2a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7aoxSus.js";import"./throttle-DMkP6nmZ.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CGx4lpK1.js";import"./RechartsWrapper-Sp30bFVi.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./path-DyVhHtw_.js";import"./activeStyles-qzo8AQBX.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CyqJOPur.js";import"./Rectangle-BjxF51Ga.js";import"./util-Dxo8gN5i.js";import"./Sector-MvPs0y-3.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
