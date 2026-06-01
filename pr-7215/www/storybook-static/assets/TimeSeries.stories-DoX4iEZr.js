import{c as e}from"./iframe-CE1Ai-kZ.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-b9Iy0H9I.js";import{g as y}from"./zIndexSlice-yWbeh4A5.js";import{C as g}from"./ComposedChart-BkL-CQuh.js";import{L as x}from"./Line-D6IA1_fT.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-BHF3M1h_.js";import{T as V}from"./Tooltip-DcGRog0h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mVWjURP_.js";import"./CartesianAxis-C_FQ4pG9.js";import"./Layer-IyK8O9Af.js";import"./resolveDefaultProps-CmEakyQ-.js";import"./Text-DURDmivW.js";import"./DOMUtils-CSrHQ79m.js";import"./isWellBehavedNumber-Bxf6a22g.js";import"./Label-DLrYniOW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CqYRU3_E.js";import"./index-Gozxl0v8.js";import"./index-B1iIDv_0.js";import"./types-Cms7mXxl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQLVMwTH.js";import"./immer-DgYhOWDS.js";import"./RechartsWrapper-4e423j6r.js";import"./index-DaGE07U6.js";import"./index-DziNllj1.js";import"./axisSelectors-C9KJ0caj.js";import"./CartesianChart-Cs0xCG0T.js";import"./chartDataContext-Y7cA5Syy.js";import"./CategoricalChart-BlcXzgR0.js";import"./Curve-DK2ZODlA.js";import"./step-Beb-DqJL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-oYMoGio2.js";import"./useAnimationId-BY50CzGe.js";import"./string-yHBgcFlJ.js";import"./ActivePoints-BjsJ7Hqi.js";import"./Dot-B4qxa7Y4.js";import"./RegisterGraphicalItemId-BjpF4fds.js";import"./ErrorBarContext-Cn2z2gOd.js";import"./GraphicalItemClipPath-CRxsA1xP.js";import"./SetGraphicalItem-DLzcOWdZ.js";import"./getRadiusAndStrokeWidthFromDot-B92ExxNA.js";import"./ActiveShapeUtils-BuWDNzFh.js";import"./useElementOffset-L6VNX1pt.js";import"./uniqBy-CajY-tu0.js";import"./iteratee-C1550tO-.js";import"./Cross-CnsPSfny.js";import"./Rectangle-Las83rKf.js";import"./Sector-xZrkrHMh.js";const Bt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
