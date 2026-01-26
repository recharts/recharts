import{e}from"./iframe-DZUAPGWU.js";import{X as s}from"./XAxis-B_pa2cFU.js";import{R as y}from"./arrayEqualityCheck-B_Kj_5n3.js";import{C as g}from"./ComposedChart-D0Cabu4N.js";import{L as x}from"./Line-LYCvK7Jw.js";import{R as S}from"./RechartsHookInspector-CTfD316c.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DL2NuUaJ.js";import{T as O}from"./Tooltip-CAAh9KsA.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./CartesianAxis-Cxo8uXUJ.js";import"./Layer-CUM7VYJb.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./Label-BpGSAoxQ.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-48hS6z3u.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./types-gnnl7DTW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CmVGlUZA.js";import"./CategoricalChart-DjpQG7hJ.js";import"./RechartsWrapper-CZEU1xAf.js";import"./CartesianChart-DFIFFZ02.js";import"./chartDataContext-uOI58bDP.js";import"./ReactUtils-BwhtQEJo.js";import"./ActivePoints-DBfahspR.js";import"./Dot-Cev7F8Ms.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./ErrorBarContext-qHTOOodp.js";import"./GraphicalItemClipPath-BFVsLge8.js";import"./SetGraphicalItem-BexwVPUx.js";import"./useAnimationId-eGODZItY.js";import"./getRadiusAndStrokeWidthFromDot-CUXV8xqK.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./Trapezoid-B65I0G_8.js";import"./Sector-Bi4APoRd.js";import"./Symbols-CJWWl_NZ.js";import"./Curve-OnMyuRM1.js";import"./index-R3RI3I7Q.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./OffsetShower-B5l6vGiv.js";import"./PlotAreaShower-e0vK3Qeg.js";import"./useElementOffset-BC7wqAzr.js";import"./iteratee-Ct_qYfh9.js";import"./Cross-WyJkKwCu.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
