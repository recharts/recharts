import{e}from"./iframe-KIGRIIb5.js";import{X as s}from"./XAxis-CSvpHUvr.js";import{R as y}from"./arrayEqualityCheck-BpdZ7hwi.js";import{C as g}from"./ComposedChart-DvEDkjwM.js";import{L as x}from"./Line-BnJPW-No.js";import{R as S}from"./RechartsHookInspector-Bt2WJDB1.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DgRq4lUU.js";import{T as V}from"./Tooltip-BeR3kpzv.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cra0xsE5.js";import"./Layer-DuIzwjaR.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./Label-CkUDjV7L.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBYmGw4W.js";import"./zIndexSlice-_VCrDw0P.js";import"./immer-WG6U2D_d.js";import"./types-w2IwZ3Nn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./index-ClQqk-oX.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./ReactUtils-CkQKUzGb.js";import"./ActivePoints-CoEyozmc.js";import"./Dot-DgubKZir.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./ErrorBarContext-Dm4Pi7GF.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./useAnimationId-Bv85JSPp.js";import"./getRadiusAndStrokeWidthFromDot-Dh8fbv0-.js";import"./ActiveShapeUtils-BbMpDdiq.js";import"./isPlainObject-CCJRIfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcYcowey.js";import"./Trapezoid-6-PW5Hrl.js";import"./Sector-Dsu6XmgC.js";import"./Symbols-B6R2DiC2.js";import"./symbol-C10mZUN3.js";import"./step-CQsLqeZl.js";import"./Curve-BndPQnOp.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";import"./useElementOffset-D6WzauAM.js";import"./uniqBy-Cw44ZgZs.js";import"./iteratee-8JDIDxH7.js";import"./Cross-DWTFUcaP.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
