import{R as e}from"./iframe-BieQWE3D.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-G4vRwmKg.js";import{R as h}from"./zIndexSlice-BYxygo-S.js";import{C as g}from"./ComposedChart-NGCBYeb_.js";import{L as x}from"./Line-2mh_gerJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Sw7i2UsL.js";import{T as V}from"./Tooltip-ud6--Qhj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DpF5IQ2O.js";import"./Layer-NUCJMvF3.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./isWellBehavedNumber-By2uQy27.js";import"./Label-D0PWYGmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHodRoAu.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./types-CIzADBdv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWxb2yva.js";import"./throttle-C6pqxX0n.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./axisSelectors-CKN_GV_q.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./Curve-SVdp-0Yk.js";import"./step-DHAVsB3S.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fhCf9-7A.js";import"./useAnimationId-3OlCfqca.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./useElementOffset-DsSZYmDt.js";import"./uniqBy-CU_ixT1X.js";import"./iteratee-WoDKDUag.js";import"./Cross-DbjBe-Jq.js";import"./Rectangle-2NfmC8rx.js";import"./util-Dxo8gN5i.js";import"./Sector-WfPlP255.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
