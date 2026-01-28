import{e}from"./iframe-DE0S0nct.js";import{X as s}from"./XAxis-HiP-oMgI.js";import{R as y}from"./arrayEqualityCheck-njkWtJmX.js";import{C as g}from"./ComposedChart-CEBgx6h9.js";import{L as x}from"./Line-Cb1a5OKW.js";import{R as S}from"./RechartsHookInspector-dBbs_0nU.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-BfEHf8Yv.js";import{T as O}from"./Tooltip-c4RdN7f5.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./CartesianAxis-CwKKuba7.js";import"./Layer-BleDqXEW.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./zIndexSlice-Blf1dc2N.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DWbbdqvJ.js";import"./RechartsWrapper-C5KB-qxr.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./ReactUtils-BtFFfC7o.js";import"./ActivePoints-CsWDm8lK.js";import"./Dot-D5tclzZ_.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./useAnimationId-BumXreuS.js";import"./getRadiusAndStrokeWidthFromDot-D6SrTg5b.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./Symbols-w5RZTm0Y.js";import"./Curve-BVDZfIkI.js";import"./index-C9PHO12n.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";import"./useElementOffset-G6wVWYzT.js";import"./iteratee-DE09Y-Is.js";import"./Cross-CpfL9XrS.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
