import{e}from"./iframe-B0RBHKhv.js";import{X as s}from"./XAxis-CmZ1Qc-G.js";import{R as y}from"./arrayEqualityCheck-CUrlIiZa.js";import{C as g}from"./ComposedChart-DP9VXl43.js";import{L as x}from"./Line-B_TellG8.js";import{R as S}from"./RechartsHookInspector-BW5IS2xz.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DmOZwrln.js";import{T as V}from"./Tooltip-BhaQIK00.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Layer-DKG_J2lX.js";import"./resolveDefaultProps-COjtEafr.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D0KeT139.js";import"./zIndexSlice-CVs48kDF.js";import"./immer-4Zn5elZn.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./index-CJLF0Mhh.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./ReactUtils-4VVLboep.js";import"./ActivePoints-B132Duv-.js";import"./Dot-D0OoiCd5.js";import"./RegisterGraphicalItemId-B4LFnea8.js";import"./ErrorBarContext-Lg7BjtUv.js";import"./GraphicalItemClipPath-CUPJIuLc.js";import"./SetGraphicalItem-BFputAxA.js";import"./useAnimationId-BhQIBdFI.js";import"./getRadiusAndStrokeWidthFromDot-C52wdnda.js";import"./ActiveShapeUtils-BxyuTB5c.js";import"./isPlainObject-CN9etUkS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwMZJDWv.js";import"./Trapezoid-CNfMGcYM.js";import"./Sector-COzuaaOM.js";import"./Symbols-DeqF7aJf.js";import"./symbol-Br_8ecW-.js";import"./step-tovYZaNJ.js";import"./Curve-OyQHTjUf.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";import"./useElementOffset-De9Hnrht.js";import"./uniqBy-ICdfjBA0.js";import"./iteratee-Dy_7KVd3.js";import"./Cross-QNZoSEYe.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
