import{e}from"./iframe-DqbxrOnC.js";import{X as s}from"./XAxis-Clh3r3oa.js";import{R as y}from"./arrayEqualityCheck-DDnB3yQJ.js";import{C as g}from"./ComposedChart-C4q1Unrm.js";import{L as x}from"./Line-D1l4t5aa.js";import{R as S}from"./RechartsHookInspector-nEoOxjIA.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-BhsfxkUf.js";import{T as O}from"./Tooltip-C4KAOnYt.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./CartesianAxis-CBS5lhtQ.js";import"./Layer-DO_g1bne.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./Label-Dn_4yvvw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BLOQbcIf.js";import"./zIndexSlice-Be92tzJW.js";import"./types-DYQm65dh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bh4iEl2l.js";import"./RechartsWrapper-CpGZSQIF.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./ReactUtils-CmTCn7uo.js";import"./ActivePoints-DIeLUbLd.js";import"./Dot-CUa8yiZU.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./ErrorBarContext-brGngOut.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./useAnimationId-CZrzdjIq.js";import"./getRadiusAndStrokeWidthFromDot-CsEgUo-q.js";import"./ActiveShapeUtils-CZKx7Ui-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DoZxp5Jb.js";import"./Trapezoid-CT_AsUkt.js";import"./Sector-BHLa0ImP.js";import"./Symbols-m2t7OCzL.js";import"./Curve-D1iAhDrw.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";import"./useElementOffset-DGNIXEDP.js";import"./iteratee-B2QshLL-.js";import"./Cross-DxueNroP.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
