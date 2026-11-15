import{R as e}from"./iframe-Co7Udrye.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C4fRrpXS.js";import{R as h}from"./zIndexSlice-DOrD3bq8.js";import{C as g}from"./ComposedChart-Bbn1F0DT.js";import{L as x}from"./Line-x-R_Kf7-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DSuWQh9E.js";import{T as V}from"./Tooltip-nc81_9QB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CBeq856j.js";import"./Layer-C65liL5F.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./Text-DVQecdV7.js";import"./ZIndexLayer-DEtSsufZ.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./Label-DffVq635.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./throttle-Cc_t6lxE.js";import"./types-CNLXZtmS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-e3Zjl34d.js";import"./RechartsWrapper-CzRhzMVT.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./Curve-CTNqeiLd.js";import"./step-hcE1AvzR.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-KlXlC10J.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./activeStyles-dIWWSidH.js";import"./useAnimationId-DDJ6zjpL.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./ErrorBarContext-DzV5SKcC.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./useElementOffset-yaxFxPbx.js";import"./uniqBy-HSw8sR7S.js";import"./iteratee-wNQh5Cd7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D5k0JUgR.js";import"./Rectangle-CFZCBY1B.js";import"./util-Dxo8gN5i.js";import"./Sector-BXDrijJd.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
