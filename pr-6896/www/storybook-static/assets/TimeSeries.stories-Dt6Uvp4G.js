import{e}from"./iframe-C-3BuwuQ.js";import{X as s}from"./XAxis-C5T_Hme-.js";import{R as y}from"./arrayEqualityCheck-FeQgOIOo.js";import{C as g}from"./ComposedChart-BKINFeBC.js";import{L as x}from"./Line-CISr_YoD.js";import{R as S}from"./RechartsHookInspector-_jP1ustk.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-TDNCuVG_.js";import{T as O}from"./Tooltip-DBF9JwRu.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./CartesianAxis-CtyApd07.js";import"./Layer-BtreNavR.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./Label-C_nqqcnR.js";import"./PolarUtils-C0kEye-G.js";import"./ZIndexLayer-cK31z4E4.js";import"./zIndexSlice-CFeEDpl4.js";import"./types-CX-GD2h3.js";import"./hooks-DEo8Vj_c.js";import"./CategoricalChart-E0yZOneU.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./ReactUtils-DhVfiJt6.js";import"./ActivePoints-CWUIUowx.js";import"./Dot-DyDE0Uuu.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./ErrorBarContext--fqfYIAi.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./useAnimationId-0OWcJ5q4.js";import"./getRadiusAndStrokeWidthFromDot-BnVuhiTb.js";import"./ActiveShapeUtils-BI8SVP5k.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYl-A-mY.js";import"./Trapezoid-DRLGjDBA.js";import"./Sector-Dgl5Ps14.js";import"./Symbols-mlCUJH03.js";import"./Curve-DOZfooTf.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";import"./useElementOffset-EnpVvfdz.js";import"./iteratee-Qha-Yhcf.js";import"./Cross-DbyTsFp8.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
