import{R as e}from"./iframe-Cs_QEvnb.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C6JaM3hk.js";import{R as h}from"./zIndexSlice-DkQ_r41R.js";import{C as g}from"./ComposedChart-B4x9ib8K.js";import{L as x}from"./Line-D7GW9opj.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CEFQXImZ.js";import{T as V}from"./Tooltip-BNYQt66B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Btqo2Ljv.js";import"./Layer-D-shTj0T.js";import"./resolveDefaultProps-DexuDbrM.js";import"./Text-xCnIxjvW.js";import"./DOMUtils-BYSGKLNe.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./Label-AhMBQLf8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGjzOXsU.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./types-C9b0uGu7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./throttle-Dy_oOifq.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./index-CKqZwqIV.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./Curve-CeUIPmBM.js";import"./step-B6gEEVRS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CbRljsJB.js";import"./useAnimationId-CXhRBgnj.js";import"./ActivePoints-BbHlS5_x.js";import"./Dot-BlS3hK8R.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./ErrorBarContext-Ds3D9aj6.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getRadiusAndStrokeWidthFromDot-CPpHwE7T.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";import"./useElementOffset-BFIrW7Gj.js";import"./uniqBy-D0TPWZAb.js";import"./iteratee-B3WPktIR.js";import"./Cross-HvfR3zEO.js";import"./Rectangle-B9nz3j4B.js";import"./util-Dxo8gN5i.js";import"./Sector-C5Q_SGqF.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
