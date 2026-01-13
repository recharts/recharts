import{e as a}from"./iframe-CjUtT138.js";import{G as p}from"./Styles-DUJrLFeA.js";import{q as f,r as x,bC as E,bD as v,bE as D,h as S,bB as w,i as k,j as M,k as T,P as L,Q as A,ao as I,ap as R,aI as U,aJ as O,$ as B,a0 as G,Z as N,_,a4 as K,a6 as H,a9 as V,aa as W,X as j,Y as F,a1 as z,a2 as q,a7 as J,a8 as Q,s as X,t as Y,u as Z,v as $,w as aa,x as ea,y as oa,z as ta,J as na,K as ra,aj as sa,e as ia,ak as ua,c as pa,al as la,b as Ca,am as da,d as ca,o as ga,a as ma,an as ha,f as ya,aW as ba,aX as Pa,aY as fa,aZ as xa,a_ as Ea,a$ as va,b0 as Da,b1 as Sa,b2 as wa,b3 as ka,b4 as Ma,b5 as Ta,b6 as La,b7 as Aa,b8 as Ia,b9 as Ra,ba as Ua,bb as Oa,bg as Ba,bh as Ga,bo as Na,g as _a,bz as Ka,bA as Ha,l as Va,m as Wa,n as ja,p as Fa,A as za,B as qa,C as Ja,D as Qa,H as Xa,I as Ya,L as Za,M as $a,N as ae,O as ee,T as oe,U as te,V as ne,W as re,ab as se,ac as ie,ad as ue,ae as pe,af as le,ag as Ce,aq as de,ar as ce,as as ge,at as me,au as he,av as ye,aO as be,aP as Pe,aQ as fe,aR as xe,aS as Ee,aT as ve,aU as De,aV as Se,br as we,bs as ke,bt as Me,bu as Te,bF as Le,bG as Ae,ay as Ie,az as Re,aA as Ue,aB as Oe,aC as Be,aD as Ge,aM as Ne,aN as _e,aw as Ke,ax as He,aE as Ve,aF as We,F as je,G as Fe,R as ze,S as qe,aG as Je,aH as Qe,bx as Xe,by as Ye,bp as Ze,bq as $e,bv as ao,bw as eo,aK as oo,aL as to,bi as no,bj as ro,bk as so,bl as io,bm as uo,bn as po,ah as lo,ai as Co,bc as co,bd as go,be as mo,bf as ho}from"./EventHandlers-JVOOzquU.js";import{P as r}from"./Polygon-wWFRDlqe.js";import{R as s}from"./arrayEqualityCheck-B-tT2ESq.js";import{C as i}from"./ComposedChart-DK7N52sv.js";import{R as u}from"./RechartsHookInspector-BSSs4sC-.js";const P=[{x:100,y:100},{x:300,y:100},{x:100,y:300},{x:300,y:300}],yo={component:r,argTypes:{points:{description:`The coordinates of all the verteces of the polygon, like [{ x, y }].<br/> By default.
      lines will be drawn to connect all verteces, in order to create a connected shape. If you want to
      skip drawing a line between 2 verteces, add a null point.`,table:{type:{summary:"Coordinate[]"},category:"General"},defaultValue:P},baseLinePoints:{description:`Provide another polygon to receive the same visual and event handling treatment. This is
      intended to be used in cases like icons, where multiple shapes may be necessary for the same layer.`,table:{type:{summary:"Coordinate[]"},category:"General"},defaultValue:[]},connectNulls:{description:`Determines if null points should be filtered out of the draw order.<br/>If there are
      null points, and connectNulls is not true, the fill style will be ignored.`,table:{type:{summary:"boolean"},category:"General"},defaultValue:!1},stroke:p.stroke,fill:p.fill,dangerouslySetInnerHTML:{table:{category:"Deprecated",disable:!0}},onCopy:ho,onCopyCapture:mo,onCut:go,onCutCapture:co,onPaste:Co,onPasteCapture:lo,onCompositionEnd:po,onCompositionEndCapture:uo,onCompositionStart:io,onCompositionStartCapture:so,onCompositionUpdate:ro,onCompositionUpdateCapture:no,onFocus:to,onFocusCapture:oo,onBlur:eo,onBlurCapture:ao,onChange:$e,onChangeCapture:Ze,onBeforeInput:Ye,onBeforeInputCapture:Xe,onInput:Qe,onInputCapture:Je,onReset:qe,onResetCapture:ze,onSubmit:Fe,onSubmitCapture:je,onInvalid:We,onInvalidCapture:Ve,onLoad:He,onLoadCapture:Ke,onError:_e,onErrorCapture:Ne,onKeyDown:Ge,onKeyDownCapture:Be,onKeyPress:Oe,onKeyPressCapture:Ue,onKeyUp:Re,onKeyUpCapture:Ie,onAbort:Ae,onAbortCapture:Le,onCanPlay:Te,onCanPlayCapture:Me,onCanPlayThrough:ke,onCanPlayThroughCapture:we,onDurationChange:Se,onDurationChangeCapture:De,onEmptied:ve,onEmptiedCapture:Ee,onEncrypted:xe,onEncryptedCapture:fe,onEnded:Pe,onEndedCapture:be,onLoadedData:ye,onLoadedDataCapture:he,onLoadedMetadata:me,onLoadedMetadataCapture:ge,onLoadStart:ce,onLoadStartCapture:de,onPause:Ce,onPauseCapture:le,onPlay:pe,onPlayCapture:ue,onPlaying:ie,onPlayingCapture:se,onProgress:re,onProgressCapture:ne,onRateChange:te,onRateChangeCapture:oe,onSeeked:ee,onSeekedCapture:ae,onSeeking:$a,onSeekingCapture:Za,onStalled:Ya,onStalledCapture:Xa,onSuspend:Qa,onSuspendCapture:Ja,onTimeUpdate:qa,onTimeUpdateCapture:za,onVolumeChange:Fa,onVolumeChangeCapture:ja,onWaiting:Wa,onWaitingCapture:Va,onAuxClick:Ha,onAuxClickCapture:Ka,onClick:_a,onClickCapture:Na,onContextMenu:Ga,onContextMenuCapture:Ba,onDoubleClick:Oa,onDoubleClickCapture:Ua,onDrag:Ra,onDragCapture:Ia,onDragEnd:Aa,onDragEndCapture:La,onDragEnter:Ta,onDragEnterCapture:Ma,onDragExit:ka,onDragExitCapture:wa,onDragLeave:Sa,onDragLeaveCapture:Da,onDragOver:va,onDragOverCapture:Ea,onDragStart:xa,onDragStartCapture:fa,onDrop:Pa,onDropCapture:ba,onMouseDown:ya,onMouseDownCapture:ha,onMouseEnter:ma,onMouseLeave:ga,onMouseMove:ca,onMouseMoveCapture:da,onMouseOut:Ca,onMouseOutCapture:la,onMouseOver:pa,onMouseOverCapture:ua,onMouseUp:ia,onMouseUpCapture:sa,onSelect:ra,onSelectCapture:na,onTouchCancel:ta,onTouchCancelCapture:oa,onTouchEnd:ea,onTouchEndCapture:aa,onTouchMove:$,onTouchMoveCapture:Z,onTouchStart:Y,onTouchStartCapture:X,onPointerDown:Q,onPointerDownCapture:J,onPointerMove:q,onPointerMoveCapture:z,onPointerUp:F,onPointerUpCapture:j,onPointerCancel:W,onPointerCancelCapture:V,onPointerEnter:H,onPointerLeave:K,onPointerOver:_,onPointerOverCapture:N,onPointerOut:G,onPointerOutCapture:B,onGotPointerCapture:O,onGotPointerCaptureCapture:U,onLostPointerCapture:R,onLostPointerCaptureCapture:I,onScroll:A,onScrollCapture:L,onWheel:T,onWheelCapture:M,onAnimationStart:k,onAnimationStartCapture:w,onAnimationEnd:S,onAnimationEndCapture:D,onAnimationIteration:v,onAnimationIterationCapture:E,onTransitionEnd:x,onTransitionEndCapture:f}},o={render:e=>a.createElement(s,{width:"100%",height:500},a.createElement(i,{width:500,height:300,margin:{top:5,right:30,left:20,bottom:5}},a.createElement(r,{...e}),a.createElement(u,null))),args:{points:P,stroke:"#000",fill:"red"}},t={render:e=>a.createElement(s,{width:"100%",height:500},a.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},a.createElement(r,{...e}),a.createElement(u,null))),args:{points:[{x:50,y:50},{x:0,y:100},{x:0,y:200},{x:100,y:200},{x:100,y:100},null],stroke:"#000",fill:"red",connectNulls:!0}},n={render:e=>a.createElement(s,{width:"100%",height:500},a.createElement(i,{width:250,height:250,margin:{top:5,right:30,left:20,bottom:5}},a.createElement(r,{...e}),a.createElement(u,null))),args:{points:[{x:40,y:20},{x:60,y:20},{x:60,y:60},{x:70,y:60},{x:50,y:90},{x:30,y:60},{x:40,y:60}],baseLinePoints:[{x:15,y:95},{x:85,y:95}],stroke:"#000",fill:"red",connectNulls:!1}};var l,C,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={300} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: pointDefault,
    stroke: '#000',
    fill: 'red'
  }
}`,...(d=(C=o.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: [{
      x: 50,
      y: 50
    }, {
      x: 0,
      y: 100
    }, {
      x: 0,
      y: 200
    }, {
      x: 100,
      y: 200
    }, {
      x: 100,
      y: 100
    }, null],
    stroke: '#000',
    fill: 'red',
    connectNulls: true
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={250} height={250} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    points: [{
      x: 40,
      y: 20
    }, {
      x: 60,
      y: 20
    }, {
      x: 60,
      y: 60
    }, {
      x: 70,
      y: 60
    }, {
      x: 50,
      y: 90
    }, {
      x: 30,
      y: 60
    }, {
      x: 40,
      y: 60
    }],
    baseLinePoints: [{
      x: 15,
      y: 95
    }, {
      x: 85,
      y: 95
    }],
    stroke: '#000',
    fill: 'red',
    connectNulls: false
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const bo=["API","UsingConnectNulls","UsingBaselinePoints"],wo=Object.freeze(Object.defineProperty({__proto__:null,API:o,UsingBaselinePoints:n,UsingConnectNulls:t,__namedExportsOrder:bo,default:yo},Symbol.toStringTag,{value:"Module"}));export{o as A,wo as C};
