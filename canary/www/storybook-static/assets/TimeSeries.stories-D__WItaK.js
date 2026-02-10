import{e}from"./iframe-DltNrMbJ.js";import{X as s}from"./XAxis-CERTAhrM.js";import{R as y}from"./arrayEqualityCheck-LkDVdEVg.js";import{C as g}from"./ComposedChart-8YXYxTJ4.js";import{L as x}from"./Line-D4wPLLT8.js";import{R as S}from"./RechartsHookInspector-CkUV0TxE.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-CKIz14Qs.js";import{T as O}from"./Tooltip-Nwyb4wI1.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSmftLt.js";import"./CartesianAxis-DfRV_-M5.js";import"./Layer-CESBlQPf.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./Label-WGWSnZjZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSXb5mnX.js";import"./zIndexSlice-BY2OfmK4.js";import"./types-ByzPfmmH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BprzVDZg.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./ReactUtils-q-DWoBEq.js";import"./ActivePoints-DLrkoeVF.js";import"./Dot-ClGJHhN-.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./ErrorBarContext-D_xaXEzA.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./useAnimationId-BKMwNFd7.js";import"./getRadiusAndStrokeWidthFromDot-dG2TYa7y.js";import"./ActiveShapeUtils-Dt67byha.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEufvsiJ.js";import"./Trapezoid-AkIt7Koc.js";import"./Sector-CucAHJS5.js";import"./Symbols-VYn2rLNF.js";import"./Curve-DQJoehXa.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";import"./useElementOffset-BISJ-SQc.js";import"./iteratee-1VRBEyg4.js";import"./Cross-BGIAn8Oc.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
