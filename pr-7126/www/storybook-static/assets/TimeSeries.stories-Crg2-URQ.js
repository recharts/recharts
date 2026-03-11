import{e}from"./iframe-D86QwX9l.js";import{X as s}from"./XAxis-BmsupeL1.js";import{R as y}from"./arrayEqualityCheck-CgXO-ZuA.js";import{C as g}from"./ComposedChart-CSnYCF8C.js";import{L as x}from"./Line-CYsao_-4.js";import{R as S}from"./RechartsHookInspector-BUpx_xVe.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-Be_57Quy.js";import{T as V}from"./Tooltip-Cm8sA5h1.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DxWgPgnd.js";import"./Layer-7ZFhhqEA.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UcIV_jcl.js";import"./zIndexSlice-Cs40vUo3.js";import"./immer-8-oQo3xP.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./ReactUtils-BRuRWbDc.js";import"./ActivePoints-oDQ7pGW6.js";import"./Dot-Bkmwyapo.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./ErrorBarContext-CuFeAbue.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./useAnimationId-DeGRDsC6.js";import"./getRadiusAndStrokeWidthFromDot-BEX2oyUV.js";import"./ActiveShapeUtils-B0bsImWY.js";import"./isPlainObject-HWQUIItt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlbPkBXV.js";import"./Trapezoid-jhl-5jxc.js";import"./Sector-qJl1uh8Z.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";import"./step-lGE8FQDz.js";import"./Curve-r3vqpxAw.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";import"./useElementOffset-D0xWsyXU.js";import"./uniqBy-CXA0falP.js";import"./iteratee-QPPlsimc.js";import"./Cross-z0fNXnwB.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
