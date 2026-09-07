import{R as e}from"./iframe-C0h7cDRB.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BA_RiYmX.js";import{R as h}from"./zIndexSlice-qYbn1M2d.js";import{C as g}from"./ComposedChart-Bxc6CdJK.js";import{L as x}from"./Line-BPh87F_P.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D7rNqaSZ.js";import{T as V}from"./Tooltip-VBW21GWi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CojQTbDy.js";import"./Layer-CDasTplA.js";import"./resolveDefaultProps-BkghodIs.js";import"./Text-0LVKVKzy.js";import"./DOMUtils-CJDZt9Se.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./Label-ChRnigpx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQRtxHWp.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./types-BFdAlI3B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DM87J7gU.js";import"./throttle-BTNdvVGL.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./axisSelectors-ao6VSC3T.js";import"./index-BTP4J2bR.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./Curve-S0jwBuSa.js";import"./step-imJiFMDF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_8lABYqi.js";import"./useAnimationId-CdJJ5aJU.js";import"./ActivePoints-BbEboQPa.js";import"./Dot-bF0pyqQk.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getRadiusAndStrokeWidthFromDot-BL01NReM.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";import"./Cross-DgIVShaz.js";import"./Rectangle-Bdav8_u9.js";import"./util-Dxo8gN5i.js";import"./Sector-DbZszRwY.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
