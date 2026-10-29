import{R as e}from"./iframe-FiuXs261.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bb3iEGS4.js";import{R as h}from"./zIndexSlice-D8yz0c_i.js";import{C as g}from"./ComposedChart-SOQGKxcc.js";import{L as x}from"./Line-M2EO-pwK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CtDFr3v-.js";import{T as V}from"./Tooltip-DNkwbJ_j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./Layer-BMNQgcyM.js";import"./resolveDefaultProps-BihUq3X9.js";import"./Text-CNbe1Pgb.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./Label-DgCFchF-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./throttle-CYeAiCIk.js";import"./types-CG6SsZFp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-C9DIlOnm.js";import"./RechartsWrapper-PYqIov25.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./Curve-CjJsHvFZ.js";import"./step-AV-3KlMf.js";import"./path-DyVhHtw_.js";import"./LabelList-DRqt9mVh.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./activeStyles-DrCvysIi.js";import"./useAnimationId-DgiqBF0b.js";import"./dataEntryStyles-BABJdaaS.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./ErrorBarContext-GrhwdkVF.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./useElementOffset-Cyn2xwTz.js";import"./uniqBy-Cb3-fOKb.js";import"./iteratee-DOdgceK_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CAe0pQFZ.js";import"./Rectangle-DdyI-Bgs.js";import"./util-Dxo8gN5i.js";import"./Sector-DtW55Dmb.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
