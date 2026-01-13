import{e}from"./iframe-CUnLgpW-.js";import{X as s}from"./XAxis-Ca50gTOu.js";import{R as y}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as g}from"./ComposedChart-dHSji5Me.js";import{L as x}from"./Line-C6zgdqmO.js";import{R as S}from"./RechartsHookInspector-Bx_AeU2-.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-CesYX3jk.js";import{T as O}from"./Tooltip-E9gUrVei.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./CartesianAxis-tcRV1YVy.js";import"./Layer-DqDgkHbR.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./Label-BFTmbefL.js";import"./PolarUtils-B2H8NKZh.js";import"./ZIndexLayer-CIJpz3dT.js";import"./zIndexSlice-COAwGY7D.js";import"./types-Cya9OZ_P.js";import"./hooks-BodQywHm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./RechartsWrapper-DlEqFuyr.js";import"./CartesianChart-BId6Bjz9.js";import"./chartDataContext-C42Wd2jm.js";import"./ReactUtils-ubByZwRx.js";import"./ActivePoints-pdYEbr7r.js";import"./Dot-b-hZt1Z5.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./ErrorBarContext-cEGm4-dJ.js";import"./GraphicalItemClipPath-DI1arc73.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./useAnimationId-DVbvIVcC.js";import"./getRadiusAndStrokeWidthFromDot-CLXj6G0s.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Symbols-B7Txi7cb.js";import"./Curve-BFHPlIj0.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";import"./useElementOffset-g6bXIJAX.js";import"./iteratee-DpJPEM-F.js";import"./Cross-DA8hwZR2.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
