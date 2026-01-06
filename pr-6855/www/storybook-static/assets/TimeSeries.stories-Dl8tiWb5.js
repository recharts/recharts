import{e}from"./iframe-DLhPWxyK.js";import{X as s}from"./XAxis-sgPLB-rr.js";import{R as y}from"./arrayEqualityCheck-m1RhjOmx.js";import{C as g}from"./ComposedChart-DNdReU5t.js";import{L as x}from"./Line-g_zWlZ80.js";import{R as S}from"./RechartsHookInspector-HNjcmSsy.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-H2aLd2HR.js";import{T as O}from"./Tooltip-DUsq4-kv.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./CartesianAxis-DsXxqkAo.js";import"./Layer-T-_zDyRj.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./Label-Cfm9uiYS.js";import"./PolarUtils-C6JBvuC0.js";import"./ZIndexLayer-CE4rF1P8.js";import"./zIndexSlice-CkjTQxGc.js";import"./types-DGdi1KYp.js";import"./hooks-CPfFhdP1.js";import"./CategoricalChart-B42UgGES.js";import"./RechartsWrapper-DgQpMTik.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./ReactUtils-CkbQi9iw.js";import"./ActivePoints-CMJVeQ-U.js";import"./Dot-BSI9AMQL.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./useAnimationId-CcCb5ZgY.js";import"./getRadiusAndStrokeWidthFromDot-CualhsEn.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFsdprJS.js";import"./Trapezoid-C-EY4dJQ.js";import"./Sector-tN30gQok.js";import"./Symbols-CNkEhL1u.js";import"./Curve-DeIwtCC2.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./Cross-B3vZI2Mu.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
