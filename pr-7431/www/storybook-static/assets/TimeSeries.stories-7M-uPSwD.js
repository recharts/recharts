import{R as e}from"./iframe-CuVm1Ncb.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-JtvtAXXy.js";import{R as h}from"./zIndexSlice-BZOjM71k.js";import{C as g}from"./ComposedChart-Jqs4ulRL.js";import{L as x}from"./Line-D32p7G7d.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DhSEg32F.js";import{T as V}from"./Tooltip-DBLd4KtR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mh9AHsYH.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./resolveDefaultProps-DXODA9k0.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./Label-CyUXMRAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./immer-qI_Lx1cT.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./axisSelectors-BqRugZOv.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-7ryyyq.js";import"./useAnimationId-DGicD8fh.js";import"./string-B6fdYHAA.js";import"./ActivePoints-rNykwE9f.js";import"./Dot-Dt98x6dx.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./ErrorBarContext-ftGml07d.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./getRadiusAndStrokeWidthFromDot-DDhP_K7H.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./useElementOffset-WvcCUeh1.js";import"./uniqBy-DQgue2C1.js";import"./iteratee-CrZQWday.js";import"./Cross-DTx7UCxu.js";import"./Rectangle-fz3Cheh_.js";import"./Sector-CAZA4MrW.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
