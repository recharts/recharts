import{R as e}from"./iframe-ii_SdKaT.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-n_W7ptOo.js";import{R as h}from"./zIndexSlice-CewrGiZi.js";import{C as g}from"./ComposedChart-BqK8fMbF.js";import{L as x}from"./Line-BCh4BadY.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DqldvK9e.js";import{T as V}from"./Tooltip-CnFF0eY_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-IlujCcRJ.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./Label-CWAFalVX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_pljZlN.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./immer-BRK5VplU.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./axisSelectors-BEJlbTgh.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./Curve-CvjftyU5.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./string-B6fdYHAA.js";import"./ActivePoints-DUYbyaX_.js";import"./Dot-D93Ls2Za.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getRadiusAndStrokeWidthFromDot-ouGtJSmE.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./useElementOffset-tGPEXiEv.js";import"./uniqBy--oKwp8uZ.js";import"./iteratee-DMX-jnSx.js";import"./Cross-Fj8WcxtO.js";import"./Rectangle-DzvlK_vY.js";import"./Sector-CCDTIu2s.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
