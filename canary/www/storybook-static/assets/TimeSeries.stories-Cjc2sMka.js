import{e}from"./iframe-DZKc3wlS.js";import{X as s}from"./XAxis-kwyNZCQz.js";import{R as y}from"./arrayEqualityCheck-DjWYx_fN.js";import{C as g}from"./ComposedChart-B72QYvLv.js";import{L as x}from"./Line-Dedd9k3r.js";import{R as S}from"./RechartsHookInspector-Co_Fh5Fl.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-D0TaSUJl.js";import{T as O}from"./Tooltip-DEISv2s-.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVgEU2hP.js";import"./CartesianAxis-zQUlpkZ2.js";import"./Layer-DH-WpK_h.js";import"./Text-D1upxTDv.js";import"./DOMUtils-32kvDN7M.js";import"./Label-CCWjKoRR.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DokrlvR2.js";import"./zIndexSlice-B0ARFS3L.js";import"./types-CL0cTInA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DW00eoGN.js";import"./CategoricalChart-CckqKMR_.js";import"./RechartsWrapper-CFmROmVB.js";import"./CartesianChart-EIvq8INt.js";import"./chartDataContext-DWjoQixe.js";import"./ReactUtils-rr4vsGZe.js";import"./ActivePoints-BuT4hzZo.js";import"./Dot-COwBL4NX.js";import"./RegisterGraphicalItemId-DnhKaSZS.js";import"./ErrorBarContext-DvKtKMAK.js";import"./GraphicalItemClipPath-7NYVrtJx.js";import"./SetGraphicalItem-DvZbVWHx.js";import"./useAnimationId-NX8Gitos.js";import"./getRadiusAndStrokeWidthFromDot-CDBmxzKc.js";import"./ActiveShapeUtils-BkixNy1s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BC7Fny-7.js";import"./Trapezoid-B-GT8XQC.js";import"./Sector-Bdu3v8S8.js";import"./Symbols-CqfdXGpW.js";import"./Curve-gwVQ8PMT.js";import"./index-ZKZvtgb5.js";import"./ChartSizeDimensions-Dn532-gh.js";import"./OffsetShower-2bIokmPy.js";import"./PlotAreaShower-FcIufD8Q.js";import"./useElementOffset-BTWpApp3.js";import"./iteratee-BsUQyG_p.js";import"./Cross-wITr2fQq.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
