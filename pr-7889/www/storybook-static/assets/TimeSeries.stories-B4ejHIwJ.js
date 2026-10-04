import{R as e}from"./iframe-C55SonNK.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BWJ2ABmI.js";import{R as h}from"./zIndexSlice-DasulNlo.js";import{C as g}from"./ComposedChart-DRtqau9M.js";import{L as x}from"./Line-BH0-Ovp4.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BMtFe6cd.js";import{T as V}from"./Tooltip-dzkde4pM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Sfv4H3gX.js";import"./Layer-Bpfyjb4F.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./Label-XuIK8xgk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-xKUTxtZr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./types-DWD7ie2J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./throttle-G3ECa8tr.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./index-Czl7SMar.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./Curve-cqh3GTlE.js";import"./step-Da31Aboz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-mUQIEGKr.js";import"./useAnimationId-Dfy40kVz.js";import"./ActivePoints-BhFZHI7X.js";import"./Dot-CxsnkucE.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./ErrorBarContext-K46B69nM.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getRadiusAndStrokeWidthFromDot-CCMPBL5C.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./useGraphicalItemIdentity-DFmFmERc.js";import"./useElementOffset-C-dE2UhQ.js";import"./uniqBy-DOeEc7ZY.js";import"./iteratee-CkjZNHcQ.js";import"./Cross-hlaIV5cr.js";import"./Rectangle--EhuiCVU.js";import"./util-Dxo8gN5i.js";import"./Sector-CVFfj6oH.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
