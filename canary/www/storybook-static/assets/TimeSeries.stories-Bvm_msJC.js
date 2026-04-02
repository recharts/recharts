import{e}from"./iframe-eSAJEZht.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DBtpKE2p.js";import{R as y}from"./arrayEqualityCheck-DIP4cf6Y.js";import{C as g}from"./ComposedChart-C-MvXfhH.js";import{L as x}from"./Line-BoAJbviG.js";import{R as S}from"./RechartsHookInspector-CNBbry69.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CjiJ_ZTy.js";import{T as V}from"./Tooltip-zy-WrCaW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CGGz-Ws1.js";import"./Layer-Cp_zb8Y2.js";import"./resolveDefaultProps-BhREbLw9.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./Label-C16feiqK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D46bbrBq.js";import"./zIndexSlice-BGPHYbVg.js";import"./immer-TNEPjPCB.js";import"./types-BwWrJ-BL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./ReactUtils-H-FoJgDc.js";import"./ActivePoints-DV8ALALF.js";import"./Dot--nNeygLj.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./ErrorBarContext-BMrhnYpV.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./useAnimationId-Cu-vgNv6.js";import"./getRadiusAndStrokeWidthFromDot-CDzYNMm_.js";import"./ActiveShapeUtils-Dy2Nr1AF.js";import"./isPlainObject-YNZwY72g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvSVsybX.js";import"./Trapezoid-CdRLetkI.js";import"./Sector-DkuyB5qD.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";import"./step-n_okOr0Q.js";import"./Curve-dniblYNk.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";import"./useElementOffset-aklaWS_N.js";import"./uniqBy-CeyRlWJb.js";import"./iteratee-CR1uVucu.js";import"./Cross-BoevrVQ9.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
