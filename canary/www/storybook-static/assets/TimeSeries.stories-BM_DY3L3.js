import{R as e}from"./iframe-BNtNFygj.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CD7gPBRF.js";import{R as h}from"./zIndexSlice-B5_48POF.js";import{C as g}from"./ComposedChart-D__S-XeQ.js";import{L as x}from"./Line-jOR65EnP.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-AvjMremu.js";import{T as V}from"./Tooltip-CbPx-O8K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-B0AA9leW.js";import"./Layer-BWvVPR01.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./Text-CVsQWuYy.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./Label-CtODaKOy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./throttle-D7zSzoPk.js";import"./types-Bv6DwZgB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-mpzDPz7I.js";import"./RechartsWrapper-CuiNtI3q.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./Curve-CzR2ia5J.js";import"./step-3Vwob_iR.js";import"./path-DyVhHtw_.js";import"./LabelList-BMYELo_i.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./activeStyles-B8Yp5U6S.js";import"./useAnimationId-DUqQXAVR.js";import"./dataEntryStyles-Bi8dthc7.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./ErrorBarContext-BnU4GK2I.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Ch0LMa9x.js";import"./Rectangle-BeuBChLi.js";import"./util-Dxo8gN5i.js";import"./Sector-p7c5jngg.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
