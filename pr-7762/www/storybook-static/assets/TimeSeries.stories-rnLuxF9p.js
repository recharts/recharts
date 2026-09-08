import{R as e}from"./iframe-BAkJeTr4.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BD-kVe53.js";import{R as h}from"./zIndexSlice-CKNgQ3a1.js";import{C as g}from"./ComposedChart-BuIARBZ7.js";import{L as x}from"./Line-CY96wbQv.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CDR0rKSq.js";import{T as V}from"./Tooltip-1xUbPnX5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DtahLlIk.js";import"./Layer-CKQWhaEi.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./Text-CbVPJcpZ.js";import"./DOMUtils-Cq0_H_rP.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./Label-Dc3MUSo6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5m0oF5l.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./types-HIIkAPMh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./throttle-Dv1aPsuB.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-EWDb0L0f.js";import"./axisSelectors-CSrb8LKj.js";import"./index-I2U5t58b.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./Curve-BVog-1mq.js";import"./step-C9hVegCW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuF6Bkm2.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./ErrorBarContext-DuO3heB_.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-A8S9o9XT.js";import"./uniqBy-DQFF8pwP.js";import"./iteratee-plK0tt8R.js";import"./Cross-D6GYkf9L.js";import"./Rectangle-DL0w3-z6.js";import"./util-Dxo8gN5i.js";import"./Sector-DJxmcL1Z.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
