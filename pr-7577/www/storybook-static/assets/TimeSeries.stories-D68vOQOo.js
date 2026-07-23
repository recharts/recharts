import{R as e}from"./iframe-DDIh6oSg.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BkhNyeaA.js";import{R as h}from"./zIndexSlice-D80Tj10e.js";import{C as g}from"./ComposedChart-Bwi8FpMM.js";import{L as x}from"./Line-DXn8wVtE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DyPEX_SS.js";import{T as V}from"./Tooltip-CdVaJTp7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DjQVT2FJ.js";import"./Layer-BjK-uYm4.js";import"./resolveDefaultProps-BovobWDa.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./Label-7ECcoRBX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CDkdwb16.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./types-CnDlnigw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CodWg03c.js";import"./throttle-Bz-N2EDI.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./axisSelectors-Cj35qO4m.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BksUzG9w.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./ErrorBarContext-Bx5pZcRj.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./useElementOffset-BTJrpw-d.js";import"./uniqBy-D9_WQstA.js";import"./iteratee-CKafh1uf.js";import"./Cross-CaKJ6mZ9.js";import"./Rectangle-BZqE5oO7.js";import"./util-Dxo8gN5i.js";import"./Sector-CxsD9MnG.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
