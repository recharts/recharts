import{e}from"./iframe-Gi8dyZ6e.js";import{X as s}from"./XAxis-y3nTYyyS.js";import{R as y}from"./arrayEqualityCheck-DuhG7Z2p.js";import{C as g}from"./ComposedChart-QXz6Q_cE.js";import{L as x}from"./Line-Bi1p01P8.js";import{R as S}from"./RechartsHookInspector-xuUFm4Np.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-B9haREcB.js";import{T as V}from"./Tooltip-Cgq1PAsR.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cy_oOLdQ.js";import"./Layer-DeXjDdnZ.js";import"./resolveDefaultProps-B-oYS9lk.js";import"./Text-BcSPYkwi.js";import"./DOMUtils-D2DkSNEb.js";import"./Label-DaPx3_eW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-gbXEsAYB.js";import"./zIndexSlice-DnlbZmgt.js";import"./immer-D5pmFx9i.js";import"./types-I1HiLSRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1sYLHQR.js";import"./hooks-BTT9-kp9.js";import"./axisSelectors-BVT7Qm3f.js";import"./RechartsWrapper-CB2AOINA.js";import"./index-DFJBHj5i.js";import"./CartesianChart-BTWnBU7d.js";import"./chartDataContext-a1u8I7YY.js";import"./CategoricalChart-qcsoPY3x.js";import"./ReactUtils-CMiXbBDc.js";import"./ActivePoints-BT7VY6a-.js";import"./Dot-Bar0xDVX.js";import"./RegisterGraphicalItemId-eSxeD-8T.js";import"./ErrorBarContext-BpvUZnWq.js";import"./GraphicalItemClipPath-Cze4veVF.js";import"./SetGraphicalItem-CtHZzRYw.js";import"./useAnimationId-DlkxhLWt.js";import"./getRadiusAndStrokeWidthFromDot-ruaZLZ0D.js";import"./ActiveShapeUtils-Cw5EPp8e.js";import"./isPlainObject-DlPp7zEZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2pGK9fNN.js";import"./Trapezoid-CjUP9FD5.js";import"./Sector-D2nuXpAg.js";import"./Symbols-CboXRb1J.js";import"./symbol-U_eLqT-N.js";import"./step-fw1t_kgZ.js";import"./Curve-BOJjXgXN.js";import"./index-rE-DaWJc.js";import"./ChartSizeDimensions-zCU3Rmg-.js";import"./OffsetShower-CbBMFbGN.js";import"./PlotAreaShower-BZejz9x4.js";import"./useElementOffset--glOhg75.js";import"./uniqBy-Cmyunk0k.js";import"./iteratee-ZMZMMttA.js";import"./Cross-BbsmXdpH.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
