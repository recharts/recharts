import{e}from"./iframe-CiJ-9oSW.js";import{X as s}from"./XAxis-BJxfrRMM.js";import{R as y}from"./arrayEqualityCheck-C8jW8oZt.js";import{C as g}from"./ComposedChart-Dc7jAWzW.js";import{L as x}from"./Line-DYv13fKO.js";import{R as S}from"./RechartsHookInspector-CQuYP5B8.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-DsUEV-Ka.js";import{T as V}from"./Tooltip-nfJU0-l6.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BCIccZ9q.js";import"./Layer-BNBNN9ao.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJKv50T_.js";import"./zIndexSlice-eHnPInNj.js";import"./immer-37ItimpE.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-9qCibHxh.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./ReactUtils-DvnOMe61.js";import"./ActivePoints-C7RKWaCs.js";import"./Dot-3CUYNcL8.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./ErrorBarContext-CYSXeNyx.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./useAnimationId-CXrnPLqE.js";import"./getRadiusAndStrokeWidthFromDot-DRdGVHTE.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./step-DuNs4m9V.js";import"./Curve-CSLHFVyE.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";import"./useElementOffset-CCXA-6n2.js";import"./uniqBy-P9RtWepS.js";import"./iteratee-DhHmPQfF.js";import"./Cross-BzoczuGw.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
