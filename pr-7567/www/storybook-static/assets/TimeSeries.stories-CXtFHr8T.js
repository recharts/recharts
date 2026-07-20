import{R as e}from"./iframe-C99kJ-sM.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DIG4p09Q.js";import{R as h}from"./zIndexSlice-C3R-krej.js";import{C as g}from"./ComposedChart-DWJvatn-.js";import{L as x}from"./Line-Bs8-Fegi.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BK39mUYh.js";import{T as V}from"./Tooltip-BaPwyXfx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C7o0Dblf.js";import"./Layer-DA9YNkXX.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./Label-B5axae2p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cja0J2zA.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./types-DQRiSjSa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C63jCstw.js";import"./throttle-TD-ujZZS.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./axisSelectors-D_vl6hBR.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./Curve-DiBuQ3yP.js";import"./step-D8AQ14_c.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-0ILzHR.js";import"./useAnimationId-DvmTFhVR.js";import"./ActivePoints-BMi_QsBO.js";import"./Dot-BDIAoW-L.js";import"./RegisterGraphicalItemId-BCeI4v7T.js";import"./ErrorBarContext-CujqDj5S.js";import"./GraphicalItemClipPath-BvRhFcbX.js";import"./SetGraphicalItem-DGSCvNHc.js";import"./getRadiusAndStrokeWidthFromDot-CycZh5GD.js";import"./ActiveShapeUtils-BBZmkA4Q.js";import"./useElementOffset-DU4filMB.js";import"./uniqBy-B76aatsv.js";import"./iteratee-BC4NiJFi.js";import"./Cross-BWIUPOvs.js";import"./Rectangle-CL3tFVAP.js";import"./util-Dxo8gN5i.js";import"./Sector-CLa7LOxI.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
