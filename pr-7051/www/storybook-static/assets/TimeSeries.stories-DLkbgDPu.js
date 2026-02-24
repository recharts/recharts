import{e}from"./iframe-DTgyoVvk.js";import{X as s}from"./XAxis-BkL5cMjG.js";import{R as y}from"./arrayEqualityCheck-EHbEP26L.js";import{C as g}from"./ComposedChart-DxsdSTLV.js";import{L as x}from"./Line-BiUeNFy3.js";import{R as S}from"./RechartsHookInspector-CEM_bNOG.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-OH59Lrba.js";import{T as V}from"./Tooltip-BCMvRAtG.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BkWnH6i3.js";import"./Layer-CN_vGRpI.js";import"./resolveDefaultProps-D6qERWpv.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./Label-Ceoi0MO2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BR0xXhbH.js";import"./zIndexSlice-C5hUHulT.js";import"./immer-Cali6Ur_.js";import"./types-CFHwNx79.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./RechartsWrapper-Chfcl0hS.js";import"./index-BZ07V7b0.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./ReactUtils-BYwaZR_U.js";import"./ActivePoints-kvFI_pNp.js";import"./Dot-DzhxTZg1.js";import"./RegisterGraphicalItemId-B8FdEXiZ.js";import"./ErrorBarContext-DyEpq3qQ.js";import"./GraphicalItemClipPath-fMgbbWOb.js";import"./SetGraphicalItem-DlupFmAY.js";import"./useAnimationId-fmEgFYYy.js";import"./getRadiusAndStrokeWidthFromDot-DnU7-Gnj.js";import"./ActiveShapeUtils-D1UYsbu-.js";import"./isPlainObject-cO95R4gJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-pA7LeOq9.js";import"./Trapezoid-C0NYHdgo.js";import"./Sector-lyZE52ex.js";import"./Symbols-DIOiPUYO.js";import"./symbol-DLAst82x.js";import"./step-C7wlxZdo.js";import"./Curve-DHT2OdXm.js";import"./index-BSHSP00B.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";import"./useElementOffset-D954DiA4.js";import"./uniqBy-BLib71RJ.js";import"./iteratee-DowDcm4g.js";import"./Cross-CaCIF03z.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
