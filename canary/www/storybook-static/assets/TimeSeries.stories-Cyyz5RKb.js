import{R as e}from"./iframe-C8yGgO2d.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DkqGLCT1.js";import{R as h}from"./zIndexSlice-CuRdZ-8K.js";import{C as g}from"./ComposedChart-D2wyoHi-.js";import{L as x}from"./Line-CY3J4eK2.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Cb_6Er0t.js";import{T as V}from"./Tooltip-Bx4PzmEf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BHyGAXdi.js";import"./Layer-tDZThP1f.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./Label-BtCjiiK8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./types-DDTipNBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./throttle-Dr0khojT.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./index-_435W0Be.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./Curve-B2EBLnIf.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmW46OuC.js";import"./useAnimationId-Bie7xBo-.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./useGraphicalItemIdentity-B0pPIliE.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";import"./Cross-COEIgewd.js";import"./Rectangle-DMqwvRGF.js";import"./util-Dxo8gN5i.js";import"./Sector-mrYfdzE_.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
