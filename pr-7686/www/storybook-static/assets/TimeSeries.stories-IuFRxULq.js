import{R as e}from"./iframe-DY5yIkq2.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DqmgH3_K.js";import{R as h}from"./zIndexSlice-BJ9sbnI3.js";import{C as g}from"./ComposedChart-Qtg4qpHf.js";import{L as x}from"./Line-D8pVJeO2.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-L5elDZ4E.js";import{T as V}from"./Tooltip-93QJ3NKk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dkt1u38S.js";import"./Layer-sQPOBB7C.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./Text-CbUk5Nnj.js";import"./DOMUtils-PzmIv2NH.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./Label-DF-ljJas.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUoXCop5.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./types-CYQx7sGq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./throttle-ClrYp41z.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./axisSelectors-BA6Z_Ork.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./CategoricalChart-xf3XNLGA.js";import"./Curve-CFlple2Z.js";import"./step-3W0WqQC-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0mJPdXUD.js";import"./useAnimationId-bV9tA_xy.js";import"./ActivePoints-DO3E4C9p.js";import"./Dot-CFTB-H51.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getRadiusAndStrokeWidthFromDot-9lBJp0HG.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-C44gFBr0.js";import"./uniqBy-CrTJkdgV.js";import"./iteratee-5kgpLf6w.js";import"./Cross-W-kdfplD.js";import"./Rectangle-D-WBL6H0.js";import"./util-Dxo8gN5i.js";import"./Sector-D5xY4Hq9.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
