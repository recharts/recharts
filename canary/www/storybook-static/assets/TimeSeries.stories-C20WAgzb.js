import{R as e}from"./iframe-DnRkZCcZ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DPYXDMnu.js";import{R as h}from"./zIndexSlice-DwWcIzrA.js";import{C as g}from"./ComposedChart-DAKOEFgJ.js";import{L as x}from"./Line-B-2uuZK0.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DjImCkyz.js";import{T as V}from"./Tooltip-wJ4R_9Xj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./resolveDefaultProps-CKyaaGET.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./Label-DX2yrrpT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./throttle-bNdHLYfF.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BG0FGZa0.js";import"./RechartsWrapper-B9w9bgII.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./Curve-QoxdgH9q.js";import"./step-CKBO-I2d.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BgjT13Al.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./activeStyles-DRi4KJX5.js";import"./useAnimationId-p0AfOAw0.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./ErrorBarContext-DvYBBAjF.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./isArguments-yB-y1yaH.js";import"./Cross-p5xAMhDn.js";import"./Rectangle-EcRxuzMl.js";import"./util-Dxo8gN5i.js";import"./Sector-BXNROzdl.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
