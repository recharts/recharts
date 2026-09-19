import{R as e}from"./iframe-Bh4IukvS.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DTE5zt6_.js";import{R as h}from"./zIndexSlice-BnhPp-nh.js";import{C as g}from"./ComposedChart-qa2sMwNO.js";import{L as x}from"./Line-f5GS_QI0.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BYEA786G.js";import{T as V}from"./Tooltip-f0mGnhlc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Ds6tzB92.js";import"./Layer-O2qI8LTc.js";import"./resolveDefaultProps-CS55fj5A.js";import"./Text-ByHw94zt.js";import"./DOMUtils-jG16kJ-0.js";import"./isWellBehavedNumber-COGARIBs.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";import"./Label-B71mUMe3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HUNPQO7Y.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./types-kFpO5oed.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DKLC06E4.js";import"./throttle-CXYaw1-J.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CloVGpsi.js";import"./axisSelectors-C8F9z3Z9.js";import"./index-BoLfeuKb.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./Curve-CAOammAF.js";import"./step-Dbp5foHF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-YvBlp4.js";import"./useAnimationId-DwO0dP0K.js";import"./ActivePoints-DirNCRmn.js";import"./Dot-C6mQoDM6.js";import"./RegisterGraphicalItemId-_cXLNg8O.js";import"./ErrorBarContext-CofrBm2P.js";import"./GraphicalItemClipPath-B9NNnVgG.js";import"./SetGraphicalItem-DSGRIbG0.js";import"./getRadiusAndStrokeWidthFromDot-B2N3Oqao.js";import"./ActiveShapeUtils-DP7EI6-I.js";import"./useGraphicalItemIdentity-Dsj7jE7N.js";import"./useElementOffset-DldO0h5h.js";import"./uniqBy-DsAZzQBt.js";import"./iteratee-DfIYWyJS.js";import"./Cross-D1wayU0t.js";import"./Rectangle-CrdePQGE.js";import"./util-Dxo8gN5i.js";import"./Sector-CNvaOfwH.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
