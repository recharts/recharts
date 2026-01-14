import{e}from"./iframe-_im4GKTL.js";import{X as s}from"./XAxis-BtqRyYI3.js";import{R as y}from"./arrayEqualityCheck-DQWePApg.js";import{C as g}from"./ComposedChart-BY8obHgx.js";import{L as x}from"./Line-0hzLwUmh.js";import{R as S}from"./RechartsHookInspector-2hFEojhh.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DpIDWeTq.js";import{T as O}from"./Tooltip-B8xCykt7.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CaxhqgES.js";import"./CartesianAxis-BZEJptN1.js";import"./Layer-ojK6bjXb.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./Label-CTy8eywr.js";import"./PolarUtils-DcWiW1XO.js";import"./ZIndexLayer-DmWCVoEY.js";import"./zIndexSlice-CPIWfeLh.js";import"./types-CFuB44L5.js";import"./hooks-DKOVFqS5.js";import"./CategoricalChart-CQUZMGEq.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./ReactUtils-CAkOWUwD.js";import"./ActivePoints-DX8NdDb8.js";import"./Dot-D7h6v8mz.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./ErrorBarContext-NodAal-E.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./useAnimationId-iCdU_Q_k.js";import"./getRadiusAndStrokeWidthFromDot-ClQkEbgX.js";import"./ActiveShapeUtils-rIph4crd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ejGTCKcw.js";import"./Trapezoid-C1OI6suu.js";import"./Sector-BGg8SpOK.js";import"./Symbols-aMSa3fiu.js";import"./Curve-CjWJcBC1.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";import"./useElementOffset-C2SIKvmg.js";import"./iteratee-CjrhkTpo.js";import"./Cross-D1pWve48.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
