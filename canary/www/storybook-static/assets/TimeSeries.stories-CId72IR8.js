import{R as e}from"./iframe-DzBbDK3f.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CQnsilRX.js";import{R as h}from"./zIndexSlice-BhAJBvui.js";import{C as g}from"./ComposedChart-DlJ6UxJ6.js";import{L as x}from"./Line-fO8G_nMa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-qbHfyqh1.js";import{T as V}from"./Tooltip-B0uFRFn0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B36j_mfg.js";import"./CartesianAxis-CeDbxL1s.js";import"./Layer-BXEIHXdm.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./Label-CGWWfPsR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpRTlowh.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./types-NVYIi3uc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9_diZXM.js";import"./immer-DQoMHntF.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./axisSelectors-VQ5WENH-.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./Curve-BT7bGYlu.js";import"./step-DAtqKpLg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0itj7bz.js";import"./useAnimationId-B-2-DeJx.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BMU7oyBA.js";import"./Dot-DJtVuX_I.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./ErrorBarContext-BH6nTEug.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getRadiusAndStrokeWidthFromDot-DqCoJDrQ.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./useElementOffset-DluJVRhv.js";import"./uniqBy-DjJrV_db.js";import"./iteratee-CGKb1kMs.js";import"./Cross-CwjOYZ8e.js";import"./Rectangle-BlGzqP8k.js";import"./Sector-Bgl1uNuC.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
