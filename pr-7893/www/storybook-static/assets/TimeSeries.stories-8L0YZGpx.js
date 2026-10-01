import{R as e}from"./iframe-Bs3p_tzt.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D4sncX3B.js";import{R as h}from"./zIndexSlice-DcX3AzLa.js";import{C as g}from"./ComposedChart-KuKgrM96.js";import{L as x}from"./Line-GIJ-1XxW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D3QRU-MC.js";import{T as V}from"./Tooltip-CGFqiCcr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-hsXt1MB3.js";import"./Layer-BnnxApB2.js";import"./resolveDefaultProps-CZZ-mEKB.js";import"./Text-fd4E17kL.js";import"./DOMUtils-BuNDld79.js";import"./isWellBehavedNumber-BsuO-HCD.js";import"./useId-Bu7K8pR2.js";import"./useBackwardsCompatibleTheme-DDcrSO0e.js";import"./Label-D1fZ0tZ3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bsBUBclv.js";import"./index-B1i9GgdA.js";import"./index-B2enMVi0.js";import"./types-DwWjBcLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CtTEEx-4.js";import"./throttle-BEGWT0nE.js";import"./index-DMMqTPnq.js";import"./index-UxLT5P2P.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C611g8G8.js";import"./axisSelectors-C4-S1rEu.js";import"./index-BfdycSnH.js";import"./CartesianChart-DvvRDnZV.js";import"./chartDataContext-Da2Hh662.js";import"./CategoricalChart-BaI0fWCj.js";import"./Curve-OpKkiqhX.js";import"./step-B0GBXtEj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BKsmNJL9.js";import"./useAnimationId-BGb6X0s3.js";import"./ActivePoints-6kUizrYZ.js";import"./Dot-CT0CWpgM.js";import"./RegisterGraphicalItemId-DLHqq9CD.js";import"./ErrorBarContext-Bf6tfPH3.js";import"./GraphicalItemClipPath-CW7J0A_O.js";import"./SetGraphicalItem-B-q3EqQB.js";import"./getRadiusAndStrokeWidthFromDot-ChgnJYUB.js";import"./ActiveShapeUtils-C1lnxfx5.js";import"./useGraphicalItemIdentity-Bn1qTGOS.js";import"./useElementOffset-L8c5YtIC.js";import"./uniqBy-CTQygRzA.js";import"./iteratee-CcX_f7ol.js";import"./Cross-C27z34rY.js";import"./Rectangle-DGv7rq-A.js";import"./util-Dxo8gN5i.js";import"./Sector-DBnEJkKd.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
