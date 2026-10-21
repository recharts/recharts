import{R as e}from"./iframe-DTHZbTt-.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DNNXvE0w.js";import{R as h}from"./zIndexSlice-CwvyUZAf.js";import{C as g}from"./ComposedChart-BGyl5BrV.js";import{L as x}from"./Line-BAiXLkVa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BmJqysRF.js";import{T as V}from"./Tooltip-DFQWj3xk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./Text-D1xR-i1r.js";import"./pageBackground-D-Popr0j.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./Label-0KYVoNB4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--bHJC1rV.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./throttle-_YZWlOkj.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BOmHsD9v.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./Curve-BFSDmDlA.js";import"./step-BNxJFgbJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./ActivePoints-XYXWcFmf.js";import"./Dot-BoMbzqSu.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getRadiusAndStrokeWidthFromDot-BBjNZ8_1.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./useElementOffset-BXtH78i8.js";import"./uniqBy-CKgXEfs_.js";import"./iteratee-CTtZA5q0.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D9Dtg2wU.js";import"./Rectangle-DcH2ra7A.js";import"./util-Dxo8gN5i.js";import"./Sector-yWkVt4zI.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
