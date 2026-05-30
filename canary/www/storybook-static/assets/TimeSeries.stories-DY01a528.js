import{c as e}from"./iframe-Cvf4U4wn.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-l3Ov2KAu.js";import{g as y}from"./zIndexSlice-CO7DftJr.js";import{C as g}from"./ComposedChart-DDdTWodp.js";import{L as x}from"./Line-DYvazgCg.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-DPGKMlVi.js";import{T as V}from"./Tooltip-QaWAXfYX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DcGEMmQ3.js";import"./CartesianAxis-BKWdoZud.js";import"./Layer-CDCy6J-l.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./Text-Kfko65iu.js";import"./DOMUtils-0PFm0Zn3.js";import"./isWellBehavedNumber-D1x3hQfA.js";import"./Label-DCVsgxMs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmQbCY-Q.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./types-CuBUAF5G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./immer-CBt7R_8A.js";import"./RechartsWrapper-hVt29Fw0.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./axisSelectors-DVSbKCnr.js";import"./CartesianChart-DDk2GzyN.js";import"./chartDataContext-BwbL_Y5V.js";import"./CategoricalChart-Bqu7zn37.js";import"./Curve-DdUHzuyS.js";import"./step-_BMXLB8G.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CtvGvrJ3.js";import"./ActivePoints-CP_bslYY.js";import"./Dot-DEWSwyeJ.js";import"./RegisterGraphicalItemId-1iDEiZF0.js";import"./ErrorBarContext-d8hdoxRP.js";import"./GraphicalItemClipPath-D3CDUk-1.js";import"./SetGraphicalItem-wq1eCtaf.js";import"./useAnimationId-DtyIsMoa.js";import"./getRadiusAndStrokeWidthFromDot-Cm80QE2r.js";import"./ActiveShapeUtils-BFe2i1Jy.js";import"./useElementOffset-WW4KUmBb.js";import"./uniqBy-BQjndAzO.js";import"./iteratee-CTJSODyf.js";import"./Cross-CLjsubSm.js";import"./Rectangle-DlZf8ANQ.js";import"./Sector-Cc3eSa_T.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
