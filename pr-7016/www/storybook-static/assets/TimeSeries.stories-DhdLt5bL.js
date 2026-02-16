import{e}from"./iframe-Ch6AeBvd.js";import{X as s}from"./XAxis-Ct6CHpvF.js";import{R as y}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as g}from"./ComposedChart-CZ_B4iUN.js";import{L as x}from"./Line-DAy7X0Tg.js";import{R as S}from"./RechartsHookInspector-B8QYXaP3.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-Du_flrq7.js";import{T as O}from"./Tooltip-DO9oNv_9.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./CartesianAxis-DGiGQ4zb.js";import"./Layer-4QzHj9sV.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./Label-BhgECJNB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./zIndexSlice-iERq52j6.js";import"./types-Do_qsLRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-m0x3riPF.js";import"./hooks-CgjYUNQl.js";import"./RechartsWrapper-DrY4pfOn.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./ReactUtils-DkszlIgF.js";import"./ActivePoints-CM9crGmK.js";import"./Dot-66bsVwqe.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./ErrorBarContext-mxMpkgJh.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./useAnimationId-YtLKjIEe.js";import"./getRadiusAndStrokeWidthFromDot-Ccoz4H_8.js";import"./ActiveShapeUtils-bE4blCx8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-IGKhP2jD.js";import"./Trapezoid-r21rfNHm.js";import"./Sector-nTDBGNXx.js";import"./Symbols-WE9lD8Kq.js";import"./Curve-Bln8u_qs.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";import"./useElementOffset-CGEO9Zqm.js";import"./iteratee-CkJe_Kei.js";import"./Cross-CWdh06dN.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Wt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Wt as __namedExportsOrder,Lt as default};
