import{R as e}from"./iframe-D38iL5U2.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DxvBJIAO.js";import{R as h}from"./zIndexSlice-Cm67KrxL.js";import{C as g}from"./ComposedChart-C9TDGW0Q.js";import{L as x}from"./Line-CtYC6NCl.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B4F2Cask.js";import{T as V}from"./Tooltip-BxKOkrFr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-khzbl4AQ.js";import"./CartesianAxis-C6E7eU9j.js";import"./Layer-BW7UV7J4.js";import"./resolveDefaultProps-CZPTys3h.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./isWellBehavedNumber-DYmqkCh1.js";import"./Label-CTZsXBnJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B3mrn3nC.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./types-CVlGri0W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./immer-D6830BYN.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./axisSelectors-31vNEB3v.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./Curve-BojgfvlB.js";import"./step-0VurBbtl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6eA2Tj-j.js";import"./useAnimationId-CrM4tScF.js";import"./ActivePoints-CKKFmVGR.js";import"./Dot-CGulo8wH.js";import"./RegisterGraphicalItemId-D4Xqb6PN.js";import"./ErrorBarContext-BaHC-CpM.js";import"./GraphicalItemClipPath-CgNMFQt0.js";import"./SetGraphicalItem-D8AKKKBR.js";import"./getRadiusAndStrokeWidthFromDot-C_jGICtX.js";import"./ActiveShapeUtils-DKkm8SfY.js";import"./useElementOffset-D7DgYNl3.js";import"./uniqBy-Cp1_UUmE.js";import"./iteratee-CHjXHaoo.js";import"./Cross-BYjRI3Ng.js";import"./Rectangle-BaDJNhGo.js";import"./util-Dxo8gN5i.js";import"./Sector-CQb59x5M.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
