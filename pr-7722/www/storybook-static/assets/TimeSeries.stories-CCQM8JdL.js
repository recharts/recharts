import{R as e}from"./iframe-DwwIEbnV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Cz_Rnhgj.js";import{R as h}from"./zIndexSlice-CQLOtaPs.js";import{C as g}from"./ComposedChart-Cmp_uiAi.js";import{L as x}from"./Line-B-nrSDyv.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DUeQ8AUA.js";import{T as V}from"./Tooltip-DVs9hVjY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Duh3rzkN.js";import"./Layer-6Fp4VzoQ.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./Label-BBU3iKAi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_JcFefp.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./types-DYVbiWe3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-COQyRYk9.js";import"./throttle-Blsl_VHV.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./Curve-DrEaRkOl.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ds3KeOI2.js";import"./useAnimationId-Cx0Chyvr.js";import"./ActivePoints-DJFnJVEG.js";import"./Dot-DmrEwaiX.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getRadiusAndStrokeWidthFromDot-jdfKPlMV.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CXNuRQTj.js";import"./uniqBy-BnkYei7v.js";import"./iteratee-CU8R_nxk.js";import"./Cross-DSpczqE0.js";import"./Rectangle-CGZsEs1f.js";import"./util-Dxo8gN5i.js";import"./Sector-B3F8CCU3.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
