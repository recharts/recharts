import{R as e}from"./iframe-QMSevZ_Z.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C0cN_JCK.js";import{R as h}from"./zIndexSlice-CqmMHsGQ.js";import{C as g}from"./ComposedChart-BanYSBKC.js";import{L as x}from"./Line-1jaGMewt.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BdG0BwVM.js";import{T as V}from"./Tooltip-DrpUXz1E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dt9ZBUsD.js";import"./CartesianAxis-fxCqdamK.js";import"./Layer-BIlvUco-.js";import"./resolveDefaultProps-D1-FsOZY.js";import"./Text-B1kcN_-d.js";import"./DOMUtils-B2SIzhm8.js";import"./isWellBehavedNumber-BPQ0SJ_C.js";import"./Label-CDZiRvSt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CEBsGFM8.js";import"./index-BO7EkBYF.js";import"./index-LDm5_5xU.js";import"./types-P1jJ2pmT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-zK2PEt.js";import"./immer-CSWl79hr.js";import"./RechartsWrapper-DMF7GIN4.js";import"./index-CIER62SJ.js";import"./index-pi0GgTlW.js";import"./axisSelectors-ClPssgYV.js";import"./CartesianChart-Cs7lfMyS.js";import"./chartDataContext-CxmQ7H3R.js";import"./CategoricalChart-Euguz-0O.js";import"./Curve-YfzASo2H.js";import"./step-CM1NK0SI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BDsdaMkZ.js";import"./useAnimationId-DlcOUKTA.js";import"./string-B6fdYHAA.js";import"./ActivePoints-DxJpOWHz.js";import"./Dot-HKvUxCmw.js";import"./RegisterGraphicalItemId-YPLe9nYm.js";import"./ErrorBarContext-CmLe_bSh.js";import"./GraphicalItemClipPath-D6ZPyI0A.js";import"./SetGraphicalItem-CL5I6sew.js";import"./getRadiusAndStrokeWidthFromDot-ClQ6U8mJ.js";import"./ActiveShapeUtils-Bwe4ExnQ.js";import"./useElementOffset-D_J7pSVP.js";import"./uniqBy-U_isDGby.js";import"./iteratee-DR35FRfo.js";import"./Cross-iS5fVb9V.js";import"./Rectangle-lJXzMoVm.js";import"./Sector-p75iSGMp.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
