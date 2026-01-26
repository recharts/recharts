import{e}from"./iframe-Byw-Ecda.js";import{X as s}from"./XAxis-DKuVnBhX.js";import{R as y}from"./arrayEqualityCheck-DJZ_H245.js";import{C as g}from"./ComposedChart-CAduK1a5.js";import{L as x}from"./Line-DgOW2saj.js";import{R as S}from"./RechartsHookInspector-DU_Xges7.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CfRyBf_k.js";import{T as O}from"./Tooltip-BRMvzK7Q.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DghbljUc.js";import"./CartesianAxis-C435YXcQ.js";import"./Layer-BCc3Ql-7.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CyfG8XIl.js";import"./zIndexSlice-BBcvffed.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CRVJYPCv.js";import"./CategoricalChart-Dg1jHZIf.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./ReactUtils-Cjy_uT2w.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./useAnimationId-QmVedw8X.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./Symbols-BEvrU7lm.js";import"./Curve-Dgc9kazX.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";import"./useElementOffset-74fnwz2l.js";import"./iteratee-CQ84vpct.js";import"./Cross-rgfJvv30.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
