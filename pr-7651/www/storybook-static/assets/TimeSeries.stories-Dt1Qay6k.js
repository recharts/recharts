import{R as e}from"./iframe-pNwHFSPW.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-KNJz3bpH.js";import{R as h}from"./zIndexSlice-DugJPvbP.js";import{C as g}from"./ComposedChart-AJqQajBW.js";import{L as x}from"./Line-CVgLMECr.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CYWGushN.js";import{T as V}from"./Tooltip-EUdUlDr7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./isWellBehavedNumber-DROlGubD.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./Label-Bzd_UlcO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUbdM7HK.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./throttle-B5IaBbRH.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./axisSelectors-BSoQDh0E.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./Curve-5mQV-JEl.js";import"./step-BsFkcvF5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BZeu0cey.js";import"./useAnimationId-DPXGQUo9.js";import"./ActivePoints-CCq-PEMS.js";import"./Dot-ByamxSDz.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getRadiusAndStrokeWidthFromDot-D0TIAu-Y.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DBzzVBN1.js";import"./uniqBy-CN3CrqJk.js";import"./iteratee-uh7lygO_.js";import"./Cross-BHm6uyaP.js";import"./Rectangle-CkjZyP7u.js";import"./util-Dxo8gN5i.js";import"./Sector-Db4NkV4b.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
