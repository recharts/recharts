import{e}from"./iframe-Qw1xV4gr.js";import{X as s}from"./XAxis-CBWX_4iF.js";import{R as y}from"./arrayEqualityCheck-D10Koezk.js";import{C as g}from"./ComposedChart-CNN_EKWK.js";import{L as x}from"./Line-Bd85dJEz.js";import{R as S}from"./RechartsHookInspector-D6S_l26T.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-h4Qg-dXF.js";import{T as O}from"./Tooltip-BWyg3IOS.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Layer-CkwgDlKc.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-E7tGttad.js";import"./zIndexSlice-oRB5pJqD.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-vjGh_8ov.js";import"./RechartsWrapper-T9NKaIls.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./ReactUtils-NyMdEGMN.js";import"./ActivePoints-avnz8yKq.js";import"./Dot-nhXnmJfZ.js";import"./RegisterGraphicalItemId-OUWj4Tar.js";import"./ErrorBarContext-JD7QlRlS.js";import"./GraphicalItemClipPath-CmAyPo3v.js";import"./SetGraphicalItem-BrmdzJxe.js";import"./useAnimationId-CmKwPH-s.js";import"./getRadiusAndStrokeWidthFromDot-Dra1xGUm.js";import"./ActiveShapeUtils-dC2_TVxn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-sthHTnfU.js";import"./Trapezoid-q5W18TEo.js";import"./Sector-KkZnhZNR.js";import"./Symbols-CO8nxrkO.js";import"./Curve-BAYVpCYt.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";import"./useElementOffset-fF3rrBo6.js";import"./iteratee-BggsNeDW.js";import"./Cross-BlrcuP5E.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
