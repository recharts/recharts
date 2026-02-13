import{e}from"./iframe-BrTwOhsr.js";import{X as s}from"./XAxis-DQVoLVBJ.js";import{R as y}from"./arrayEqualityCheck-CfVGBoS6.js";import{C as g}from"./ComposedChart-Br1-FoJi.js";import{L as x}from"./Line-CTSMyiLy.js";import{R as S}from"./RechartsHookInspector-wr1qbxN7.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DyCazfsW.js";import{T as O}from"./Tooltip-BOiBMA8K.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D8gYhhcH.js";import"./CartesianAxis-BnpVD6GC.js";import"./Layer-B-9J2nmA.js";import"./Text-DY3oZB1F.js";import"./DOMUtils-CIJ8QKhm.js";import"./Label-Bx9GqcNI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vpi4acAX.js";import"./zIndexSlice-q9T-BB65.js";import"./types-CgBItb-S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CwxxJRu9.js";import"./RechartsWrapper-D38DG274.js";import"./CartesianChart-Iv5_uUXW.js";import"./chartDataContext-ptx60bcJ.js";import"./CategoricalChart-BU0QE7ld.js";import"./ReactUtils-BRgMO5-h.js";import"./ActivePoints-CUqSm5lk.js";import"./Dot-2FtraOao.js";import"./RegisterGraphicalItemId-DG1ATRc8.js";import"./ErrorBarContext-B6qv5CJK.js";import"./GraphicalItemClipPath-BJcM9DJz.js";import"./SetGraphicalItem-DZWKp8RZ.js";import"./useAnimationId-DrcXJvRo.js";import"./getRadiusAndStrokeWidthFromDot-C2LdcGg9.js";import"./ActiveShapeUtils-BDlzWM-D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkEKHy4P.js";import"./Trapezoid-BSnUVGBW.js";import"./Sector-GT6Bl8Sq.js";import"./Symbols-L5mWEGXG.js";import"./Curve-CFG-wGoi.js";import"./index-8XSHT_-Z.js";import"./ChartSizeDimensions-CdK4X_Ae.js";import"./OffsetShower-Djp4qM9b.js";import"./PlotAreaShower-B7fNSASi.js";import"./useElementOffset-CKja-FAu.js";import"./iteratee-BK7KGKiG.js";import"./Cross-quBe8XuW.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
