import{e}from"./iframe-BO2lV8Fr.js";import{X as s}from"./XAxis-n0cJUWOz.js";import{R as y}from"./arrayEqualityCheck-BPZLCCv_.js";import{C as g}from"./ComposedChart-C-_Lr0N_.js";import{L as x}from"./Line-QXdRrMDG.js";import{R as S}from"./RechartsHookInspector-BaEmilk5.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-C55ZO64o.js";import{T as O}from"./Tooltip-DSLeoLaw.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./CartesianAxis-wvny4geP.js";import"./Layer-IoZ0rL1L.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./Label-4EeKD-N4.js";import"./PolarUtils-CZtkokJH.js";import"./ZIndexLayer-CKe6oR6h.js";import"./zIndexSlice-OMKiStTn.js";import"./types-uDYlV2go.js";import"./hooks-CyQEzp2Y.js";import"./CategoricalChart-mKGFwIoi.js";import"./RechartsWrapper-CnX2hcx7.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./ReactUtils-CB6ifrXE.js";import"./ActivePoints-D9PJXPxG.js";import"./Dot-jMjXiq3a.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./ErrorBarContext-BB-sopap.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./useAnimationId-B_L243Vk.js";import"./getRadiusAndStrokeWidthFromDot-DJdRuXTC.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./Symbols-BsRtfl74.js";import"./Curve-BbZIFp84.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";import"./useElementOffset-C67P8EXt.js";import"./iteratee-CKVmbhaC.js";import"./Cross-Cw0a3q2D.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
