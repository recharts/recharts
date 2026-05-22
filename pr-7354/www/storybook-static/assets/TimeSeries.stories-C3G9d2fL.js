import{e}from"./iframe-wPjdlMkh.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-_OYHLA6K.js";import{g as y}from"./arrayEqualityCheck-C2qrry8R.js";import{C as g}from"./ComposedChart-DRK5OR9O.js";import{L as x}from"./Line-3LeznW14.js";import{R as S}from"./RechartsHookInspector-Bh7Xd8ps.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-NFHY5pWC.js";import{T as V}from"./Tooltip-CTH7qdUG.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BzSAAt9Y.js";import"./Layer-Cueh5NkG.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./Label-BRKSm8Ce.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9w89N_j.js";import"./zIndexSlice-CfQuOadn.js";import"./immer-BpPfFNPI.js";import"./types-D-aEIpto.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./RechartsWrapper-B-jo2qpq.js";import"./index-CRU-lK14.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./Curve-CTJQqo2b.js";import"./step-BR5xtyiz.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DkGkgP-m.js";import"./ActivePoints-0zG1dEq0.js";import"./Dot-BxnY7nzN.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./useAnimationId-FpSV_Xeh.js";import"./getRadiusAndStrokeWidthFromDot-BcYs4mGB.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./index-88IFfxfH.js";import"./ChartSizeDimensions-CSliTc3n.js";import"./OffsetShower-C85nEH-b.js";import"./PlotAreaShower-DrRr8S-w.js";import"./useElementOffset-BW7DH_NQ.js";import"./uniqBy-Csen4X-d.js";import"./iteratee-Bu02any-.js";import"./Cross-CrsyMmeS.js";import"./Rectangle-D2oO3kmO.js";import"./Sector-BeyIJ6e_.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
