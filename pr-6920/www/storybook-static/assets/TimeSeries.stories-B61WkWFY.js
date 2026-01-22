import{e}from"./iframe-CgKUDY6I.js";import{X as s}from"./XAxis-DwOryPfA.js";import{R as y}from"./arrayEqualityCheck-4uJZ54sz.js";import{C as g}from"./ComposedChart-553E1B93.js";import{L as x}from"./Line-PRm828Ee.js";import{R as S}from"./RechartsHookInspector-BbTYK-9O.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-78x8Dv2Q.js";import{T as O}from"./Tooltip-B0QSnoqq.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMHVQbHf.js";import"./CartesianAxis-B5IaiaWB.js";import"./Layer-DyDQThNB.js";import"./Text-D7eyVQni.js";import"./DOMUtils-oL5y8gGU.js";import"./Label-Dn5iT33K.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Cm5c_q02.js";import"./zIndexSlice-L1yp4KKu.js";import"./types-DoxvimZ4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C-jfEB0O.js";import"./CategoricalChart-BTXI1VEa.js";import"./RechartsWrapper-DRtAtWmJ.js";import"./CartesianChart-DklQ4GGx.js";import"./chartDataContext-B10HjSyG.js";import"./ReactUtils-4_OOWgDq.js";import"./ActivePoints-M28xof4x.js";import"./Dot-DU9l2ZZW.js";import"./RegisterGraphicalItemId-DTO6cAIg.js";import"./ErrorBarContext-DEMjkEM_.js";import"./GraphicalItemClipPath-D2P2Wy6l.js";import"./SetGraphicalItem-GcELh7Cs.js";import"./useAnimationId-BABjQp7J.js";import"./getRadiusAndStrokeWidthFromDot-C8stW6xl.js";import"./ActiveShapeUtils-4Z7GGztm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDDRsXYi.js";import"./Trapezoid-XOwgAbCO.js";import"./Sector-BF2Rl4dz.js";import"./Symbols-Crrpo09o.js";import"./Curve-BuIdVsH6.js";import"./index-2ufv7V98.js";import"./ChartSizeDimensions-BloifcJy.js";import"./OffsetShower-BASfXPJZ.js";import"./PlotAreaShower-d7Om0wsj.js";import"./useElementOffset-Db-z7mz0.js";import"./iteratee-CbFyJTBX.js";import"./Cross-CmxHccTU.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
