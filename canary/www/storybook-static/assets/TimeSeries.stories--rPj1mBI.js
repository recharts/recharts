import{e}from"./iframe-Cn9771Nb.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-CdGr2Iem.js";import{g as y}from"./arrayEqualityCheck-D-ixwH56.js";import{C as g}from"./ComposedChart-GHVX126K.js";import{L as x}from"./Line-BKe7e15P.js";import{R as S}from"./RechartsHookInspector-ByD7qz5q.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-BZXwjMGy.js";import{T as V}from"./Tooltip-CF355n77.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./resolveDefaultProps-DDTNdovN.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUDNhmE-.js";import"./zIndexSlice-B5zV17Bd.js";import"./immer-Dn_-MauB.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./Curve-qT1eTXpe.js";import"./step-BLbmOldc.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CChdz-3q.js";import"./ActivePoints-bvsEPa1q.js";import"./Dot-D-dqVUjX.js";import"./RegisterGraphicalItemId-BPnyUTiw.js";import"./ErrorBarContext-DTo-1FhF.js";import"./GraphicalItemClipPath-B_ckz-a6.js";import"./SetGraphicalItem-CgvN0HNW.js";import"./useAnimationId-5N3XsSyx.js";import"./getRadiusAndStrokeWidthFromDot-Cr9kNYBa.js";import"./ActiveShapeUtils-CchfY29Y.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";import"./useElementOffset-BmhffW7B.js";import"./uniqBy-iZZmpyGq.js";import"./iteratee-DKSJObgo.js";import"./Cross-D8ACR-lS.js";import"./Rectangle-DHVB8KHg.js";import"./Sector-Z_tZKkWO.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
